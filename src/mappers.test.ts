import { expect, test } from "bun:test";
import { mapRecipeToRecipePreview } from "./mappers";

test("should map data properly", async () => {
    const [firstBun] = await Bun.file("./data.json").json();
    const mappedFirstBun = mapRecipeToRecipePreview(firstBun)
  expect(mappedFirstBun).toMatchObject({
    name: firstBun.name,
    imageSrc: firstBun.imageSrc
  });
});