/**
 * 
 * 
 * @param {string} uuid
 * @param {string} firstName
 * @param {string} lastName
 */
MERGE (p:Person {uuid:$uuid})
ON MATCH SET 
  p.firstName = $firstName,
  p.lastName = $lastName
