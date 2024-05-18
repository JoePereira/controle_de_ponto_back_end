import app from "@/app";
import prisma from "@/utils/prismaClient";
import request from "supertest";

describe("Entry API", () => {
  beforeAll(async () => {
    await prisma.$connect();
    // await prisma.horarioEntrada.deleteMany({});

    await prisma.usuario.create({
      data: {
        id: "1H4KJ8S",
        nome: "Joe",
      },
    });

    const dia = new Date();
    const horarioEntrada = new Date();

    await prisma.horarioEntrada.createMany({
      data: [
        { codigoUsuario: "1H4KJ8S", dia, horarioEntrada },
        { codigoUsuario: "1H4KJ8S", dia, horarioEntrada },
        { codigoUsuario: "1H4KJ8S", dia, horarioEntrada },
      ],
    });
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should get entries by user code with pagination (deveria pegar os horarios do usuario com paginacao)", async () => {
    const response = await request(app)
      .get(`/entry/getEntries/1H4KJ8S`)
      .query({ page: 1, pageSize: 2 });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(response.body).toHaveProperty("total");
    expect(response.body).toHaveProperty("page");
    expect(response.body).toHaveProperty("pageSize");
    expect(response.body.data.length).toBeLessThanOrEqual(2);
    expect(response.body.total).toBeGreaterThan(0);
    expect(response.body.page).toBe(1);
    expect(response.body.pageSize).toBe(2);
  });

  it("should return an empty array if user has no entries (deveria retornar um array vazio se nao tiver horarios de entrada do usuario)", async () => {
    const response = await request(app)
      .get("/entry/getEntries/A5A5A5A")
      .query({ page: 1, pageSize: 2 });

    expect(response.status).toBe(200);
    expect(response.body.data).toEqual([]);
    expect(response.body.total).toBe(0);
    expect(response.body.page).toBe(1);
    expect(response.body.pageSize).toBe(2);
  });
});
