-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HorarioEntrada" (
    "id" TEXT NOT NULL,
    "codigoUsuario" TEXT NOT NULL,
    "dia" TIMESTAMP(3) NOT NULL,
    "horarioEntrada" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HorarioEntrada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HorarioSaida" (
    "id" TEXT NOT NULL,
    "codigoUsuario" TEXT NOT NULL,
    "dia" TIMESTAMP(3) NOT NULL,
    "horarioSaida" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HorarioSaida_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "HorarioEntrada" ADD CONSTRAINT "HorarioEntrada_codigoUsuario_fkey" FOREIGN KEY ("codigoUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HorarioSaida" ADD CONSTRAINT "HorarioSaida_codigoUsuario_fkey" FOREIGN KEY ("codigoUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
