import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

test("GET /api/v1/status/ should return 200", async () => {
  const resposta = await fetch("http://localhost:3000/api/v1/status");
  expect(resposta.status).toBe(200);

  const responseBody = await resposta.json();

  const parsedUpdateAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdateAt);
  expect(responseBody.dependencies.database.version).toEqual("16.0");
  expect(responseBody.dependencies.database.max_connections).toBeGreaterThan(0);
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});
