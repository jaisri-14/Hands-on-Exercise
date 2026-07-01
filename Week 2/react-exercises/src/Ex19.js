import axios from "axios";

/* =========================
   GitClient Module
========================= */
class GitClient {
  async getRepositories(username) {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );

    return response.data.map((repo) => repo.name);
  }
}

/* =========================
   Jest Unit Test
========================= */
jest.mock("axios");

describe("Git Client Tests", () => {

  test("should return repository names for techiesyed", async () => {

    // Mock API response
    const mockData = {
      data: [
        { name: "react-app" },
        { name: "node-api" },
        { name: "ml-project" }
      ]
    };

    // Mock axios.get
    axios.get.mockResolvedValue(mockData);

    const client = new GitClient();

    const result = await client.getRepositories("techiesyed");

    // Assert returned repo names
    expect(result).toEqual([
      "react-app",
      "node-api",
      "ml-project"
    ]);

    // Verify API call
    expect(axios.get).toHaveBeenCalledWith(
      "https://api.github.com/users/techiesyed/repos"
    );
  });

});