describe("add todo form", () => {
	it("can add and delete a todo", () => {
		cy.visit("/add");
		cy.findByLabelText(/Todo Content:/i)
			.click()
			.type("hello add");

		cy.findByLabelText(/Todo Priority:/i).select("1");

		cy.findByLabelText(/Todo Due Date:/i)
			.click()
			.get(".react-datepicker__day--010")
			.click();

		cy.findByDisplayValue(/Add Todo/i)
			.click()
			.url()
			.should("eq", "http://localhost:3000/");
	});
});
