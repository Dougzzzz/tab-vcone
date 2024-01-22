test("GET /api/v1/status/ should return 200", async () => {
  const resposta = await fetch("http://localhost:3000/api/v1/status");
  expect(resposta.status).toBe(200);
});
