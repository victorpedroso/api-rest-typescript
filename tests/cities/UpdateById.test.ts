import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cities - UpdateById", () => {
  it("Update regiser by id", async () => {
    const res1 = await testServer.post("/cities").send({
      name: "Teste",
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resGet = await testServer.put(`/cities/${res1.body}`).send({
      name: "Teste 2",
    });

    expect(resGet.statusCode).toEqual(StatusCodes.OK);
    expect(resGet.body).toHaveProperty("name");
  });
});
