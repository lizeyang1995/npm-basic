describe("for romanizer", () => {
  it('should return x when imput 10', () => {
    const result = transform(10);
    expect('x').toEqual(result);
});
})