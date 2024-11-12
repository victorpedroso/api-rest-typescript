import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cities - GetById", () => {
  it("Get regiser by id", async () => {
    const res1 = await testServer.post("/cities").send({
      name: "Teste",
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resGet = await testServer.get(`/cities/${res1.body}`).send();

    expect(resGet.statusCode).toEqual(StatusCodes.OK);
    expect(resGet.body).toHaveProperty("name");
  });

  it("Get regiser by id not registered", async () => {
    const res1 = await testServer.get("/cities/999999").send();

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty("errors.default");
  });
});
