import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";
import axios from "axios";
import { createClients } from "./clients.js";

const config = dotenv.config();
const app = express();
const contentfulClient = createClients();

const {
  parsed: {
    PORT,
    NODE_ENV,
    CONTENTFUL_DELIVERY_BASE_URL,
    CONTENTFUL_MANAGEMENT_BASE_URL,
    SPACE_ID,
    ENVIRONMENT_ID,
    CONTENTFUL_DELIVERY_ACCESS_TOKEN,
    CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
  },
} = config;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/idea", async (req, res) => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "idea",
    });

    console.log(JSON.stringify(response.items, null, 2));

    const ideas = response.items.map((item) => {
      if (item.fields.comments) {
        return {
          id: item.sys.id,
          title: item.fields.ideaName,
          content: item.fields.ideaContent,
          upvotes: item.fields.upvotes,
          publishedAt: item.sys.createdAt,
          comments: item.fields.comments.map((element) => {
            return {
              commenter: element.fields.commenter,
              comment: element.fields.commentText,
              publishedAt: element.sys.createdAt,
            };
          }),
        };
      } else {
        return {
          id: item.sys.id,
          title: item.fields.ideaName,
          content: item.fields.ideaContent,
          upvotes: item.fields.upvotes,
          publishedAt: item.sys.createdAt,
        };
      }
    });
    console.log("Response", JSON.stringify(ideas, null, 2));
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify(ideas, null, 2));
  } catch (e) {
    console.log("Error: " + e);
    res.status(404);
    res.send(e);
  }
});

app.post("/ideas", async (req, res) => {
  fetch(
    `${CONTENTFUL_MANAGEMENT_BASE_URL}/spaces/${SPACE_ID}/environments/master/entries`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CONTENTFUL_MANAGEMENT_ACCESS_TOKEN}`,
        "X-Contentful-Content-Type": "idea",
      },
      body: JSON.stringify({
        fields: {
          ideaName: {
            "en-US": req.body.title,
          },
          ideaContent: { "en-US": req.body.content },
          upvotes: {
            "en-US": 0,
          },
          comments: [],
        },
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Response", JSON.stringify(data, null, 2));
      console.log("ID", JSON.stringify(data.sys.id, null, 2));
      fetch(
        `${CONTENTFUL_MANAGEMENT_BASE_URL}/spaces/${SPACE_ID}/environments/master/entries/${data.sys.id}/published`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${CONTENTFUL_MANAGEMENT_ACCESS_TOKEN}`,
            "X-Contentful-Version": data.sys.version,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Response", JSON.stringify(data, null, 2));
          res.send(JSON.stringify(data, null, 2));
        });
    });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
