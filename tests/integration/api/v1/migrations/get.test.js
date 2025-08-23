import database from "infra/database";

beforeAll(ClearDatabase)

async function ClearDatabase() {
  await database.query(`drop schema public cascade; create schema public;`);
}

test("GET /api/v1/migrations/ should return 200", async () => {

  const resposta = await fetch("http://localhost:3000/api/v1/migrations/");
  expect(resposta.status).toBe(200);
  
  const respostaJson = await resposta.json();

  expect(Array.isArray(respostaJson)).toBe(true);
  expect(respostaJson.length).toBeGreaterThan(0);
});
