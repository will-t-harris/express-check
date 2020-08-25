describe("add todo form", () => {
	it("can add a todo", () => {
		cy.visit("/").then(() => {
			cy.findByTestId(/todo-list/i);
		});
		cy.visit("/add");
		cy.findByLabelText(/Todo Content:/i)
			.click()
			.type("hello add");

		cy.findByLabelText(/Todo Priority:/i).select("1");

		cy.findByLabelText(/Todo Due Date:/i)
			.click()
			.get(".react-datepicker__day--010")
			.click();

		cy.findByDisplayValue(/Add Todo/i).click();

		cy.url().should("eq", "http://localhost:3000/");
	});

	it("can delete a todo", () => {
		cy.visit("/").then(() => {
			const todos = cy.findByTestId(/todo-list/i).children();
			console.log(todos);
		});
	});
});
