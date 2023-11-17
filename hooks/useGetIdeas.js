import { useState, useEffect } from "react";
export function useGetIdeas() {
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/idea`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
