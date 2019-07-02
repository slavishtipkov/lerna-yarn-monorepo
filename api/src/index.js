const OktaJwtVerifier = require("@okta/jwt-verifier");

const verifierToAssertCustomSetOfClaims = new OktaJwtVerifier({
  issuer: "https://dev-880339.okta.com/oauth2/default",
  clientId: "0oatobvdnFGs0SkLI356",
  assertClaims: {
    cid: "0oatobvdnFGs0SkLI356"
  }
});

const currentAccessToken =
  "eyJraWQiOiI3UWtIbkRUTXc0aHMtTmVGX2NocWhWUzlUWVhhZEcwTmVuTjMzMWRzY2FjIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULnBPbjIwSkdDRlZ3a2FhX2E2Uzk2MnBzVGFtU1p2U1FZa3ByOUZMU0FTMGciLCJpc3MiOiJodHRwczovL2Rldi04ODAzMzkub2t0YS5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNTYyMDc0NDg3LCJleHAiOjE1NjIwNzgwODcsImNpZCI6IjBvYXRvYnZkbkZHczBTa0xJMzU2IiwidWlkIjoiMDB1bTIwdm1vVDlZenhmTjAzNTYiLCJzY3AiOlsib3BlbmlkIl0sInN1YiI6InNsYXZpc2h0aXBrb3YxOTkzQGdtYWlsLmNvbSJ9.YQdUY-_pG4EsdUUusergT9MZglkEYT6oWQ44_QkKODTGHLUunXrHNaljDhmYZ9S2GK6cXjZLvgY8JHl8IqhlDBxznfkj_RPhow4_Cusyl05QdHWimI1cAjSyKaMdM7v0kurI1Bme60CHn9xmOEpHXTafd4ei1aERhFGxWx6KMKZYhAlemVjc6nCCZW9QXvuGSQ4MftjYwYwq28TX2MeGDgNShTLhVotqqX_Y7NoSkPnZxiNE3gcIBulnrfBxcDB532FNINNn1GzpY-GnXr7Z7uRPXWovPDe4fnC6RFwVjKGwnqiSNsZWIRM6VLZ25MjHCGybTlI7GDUuEaP0HruEEg";

verifierToAssertCustomSetOfClaims
  .verifyAccessToken(currentAccessToken, "api://default")
  .then((jwt) => console.log("token is valid " + jwt))
  .catch((err) => console.warn("token failed validation"));
