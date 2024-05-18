import app from "@/app";
import prisma from "@/utils/prismaClient";
import request from "supertest";

describe("Exit API", () => {
  beforeAll(async () => {
    await prisma.$connect();
    // await prisma.horarioSaida.deleteMany({});

    await prisma.usuario.create({
      data: {
        id: "1H37S89",
        nome: "Joe",
      },
    });

    const dia = new Date();
    const horarioSaida = new Date();

    await prisma.horarioSaida.createMany({
      data: [
        { codigoUsuario: "1H37S89", dia, horarioSaida },
        { codigoUsuario: "1H37S89", dia, horarioSaida },
        { codigoUsuario: "1H37S89", dia, horarioSaida },
      ],
    });
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should get exities by user code with pagination (deveria pegar os horarios de saida do usuario com paginacao)", async () => {
    const response = await request(app)
      .get(`/exit/getExities/1H37S89`)
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

  it("should return an empty array if user has no exities (deveria retornar um array vazio se nao tiver horarios de saida do usuario)", async () => {
    const response = await request(app)
      .get("/exit/getExities/A5A5A5A")
      .query({ page: 1, pageSize: 2 });

    expect(response.status).toBe(200);
    expect(response.body.data).toEqual([]);
    expect(response.body.total).toBe(0);
    expect(response.body.page).toBe(1);
    expect(response.body.pageSize).toBe(2);
  });

  it("should create a new exit (deveria registrar um novo horario de saida para o usuario)", async () => {
    const response = await request(app)
      .post("/exit/createExit")
      .send({ codigoUsuario: "1H37S89" });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("codigoUsuario", "1H37S89");
    expect(response.body).toHaveProperty("dia");
    expect(response.body).toHaveProperty("horarioEntrada");

    // Verificar se a entrada foi realmente criada no banco de dados
    const createdEntry = await prisma.horarioEntrada.findUnique({
      where: { id: response.body.id },
    });

    expect(createdEntry).not.toBeNull();
    expect(createdEntry?.codigoUsuario).toBe("1H37S89");
  });
});
