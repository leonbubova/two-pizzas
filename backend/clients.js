import contentful from "contentful";
export const createClients = () => {
  const client = contentful.createClient({
    space: "pig7tn791bn6",
    accessToken: "kjd4GXNs7XXy6osocTKVnE1uvmoG0MMJizseC31gfWY",
  });
  return client;
};
