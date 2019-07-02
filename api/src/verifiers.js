const OktaJwtVerifier = require("@okta/jwt-verifier");

export const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: "https://dev-880339.okta.com/oauth2/default" // required
});

// For basic use cases, you can ask the verifier to assert a custom set of claims. For example, if you need to assert that this JWT was issued for a given client id:

export const verifierToAssertCustomSetOfClaims = new OktaJwtVerifier({
  issuer: "https://dev-880339.okta.com/oauth2/default",
  clientId: "0oatobvdnFGs0SkLI356",
  assertClaims: {
    cid: "0oatobvdnFGs0SkLI356"
  }
});

// Validation fails and an error is returned if an access token does not have the configured claim.

// For more complex use cases, you can ask the verifier to assert that a claim includes one or more values.
// This is useful for array type claims as well as claims that have space-separated values in a string.
// You use the form: <claim name>.includes in the assertClaims object with an array of values to validate.
// For example, if you want to assert that an array claim named groups includes (at least) Everyone and Another, you'd write code like this:

export const verifierToAssertThatAClaimIncludesVals = new OktaJwtVerifier({
  issuer: ISSUER,
  clientId: CLIENT_ID,
  assertClaims: {
    "groups.includes": ["Everyone", "Another"]
  }
});

// If you want to assert that a space-separated string claim name scp includes (at least) promos:write and promos:delete, you'd write code like this:

export const verifierToAssertSpaceSeparatedString = new OktaJwtVerifier({
  issuer: ISSUER,
  clientId: CLIENT_ID,
  assertClaims: {
    "scp.includes": ["promos:write", "promos:delete"]
  }
});

// The values you want to assert are included are always represented as an array (the right side of the expression). The claim that you're checking against
// (the left side of the expression) can have either an array (like groups) or a space-separated list in a string (like scp) as its value type.
// NOTE: Currently, .includes is the only supported claim operator.

// Caching & Rate Limiting
// By default, found keys are cached by key ID for one hour. This can be configured with the cacheMaxAge option for cache entries.
// If a key ID is not found in the cache, the JWKs endpoint will be requested. To prevent a DoS if many not-found keys are requested, a rate limit of
// 10 JWKs requests per minute is enforced. This is configurable with the jwksRequestsPerMinute option.
// Here is a configuration example that shows the default values:

// All values are default files
export const verifierJwksRequestPerMinuteOption = new OktaJwtVerifier({
  issuer: "https://{yourOktaDomain}/oauth2/default",
  clientId: "{clientId}",
  cacheMaxAge: 60 * 60 * 1000, // 1 hour
  jwksRequestsPerMinute: 10
});
