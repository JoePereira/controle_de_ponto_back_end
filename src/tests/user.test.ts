import app from "@/app";
import generateId from "@/utils/geberateId";
import prisma from "@/utils/prismaClient";
import request from "supertest";

describe("User API", () => {
  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  beforeEach(async () => {
    await prisma.usuario.deleteMany();
  });

  it("should create a user and get ir by id (Deve criar o usuario e busca-lo pelo id)", async () => {
    const id = generateId();
    const createUserResponse = await request(app)
      .post("/user/createUser")
      .send({ id, nome: "Joe" });

    expect(createUserResponse.status).toBe(201);
    expect(createUserResponse.body).toHaveProperty("id");

    const userId = createUserResponse.body.id;

    const getUserResponse = await request(app).get(
      `/user/getUserById/${userId}`
    );

    expect(getUserResponse.status).toBe(200);
    expect(getUserResponse.body.nome).toBe("Joe");
  });
});
