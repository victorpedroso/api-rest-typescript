import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cities - Create", () => {
  it("Delete register", async () => {
    const res1 = await testServer.post("/cities").send({
      name: "Teste",
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resDeleted = await testServer.delete(`/cidades/${res1.body}`).send();

    expect(resDeleted.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
  it("Delete register not registered", async () => {
    const res1 = await testServer.delete("/cities/999999").send();

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty("errors.default");
  });
});
