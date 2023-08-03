const { Client } = require("pg");
const { PostgreSqlContainer } = require("@testcontainers/postgresql");
const { createCustomerTable, createCustomer, getCustomers } = require("./customer-repository");

describe("Customer Repository", () => {
    jest.setTimeout(60000);

    let postgresContainer;
    let postgresClient;

    beforeAll(async () => {
        postgresContainer = await new PostgreSqlContainer().start();
        postgresClient = new Client({ connectionString: postgresContainer.getConnectionUri() });
        await postgresClient.connect();
        await createCustomerTable(postgresClient)
    });

    afterAll(async () => {
        await postgresClient.end();
        await postgresContainer.stop();
    });

    it("should create and return multiple customers", async () => {
        const customer1 = { id: 1, name: "John Doe" };
        const customer2 = { id: 2, name: "Jane Doe" };

        await createCustomer(postgresClient, customer1);
        await createCustomer(postgresClient, customer2);

        const customers = await getCustomers(postgresClient);
        expect(customers).toEqual([customer1, customer2]);
    });
});
