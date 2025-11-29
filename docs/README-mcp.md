# Playwright MCP – TypeScript UI Automation Framework

This project uses Model Context Protocol (MCP) server that provides browser automation capabilities using Playwright. This server enables AI tools to interact with web pages through structured accessibility snapshots, bypassing the need for screenshots or visually-tuned models.

---

# Table of Contents
- [Requirements](#requirements)
- [What’s Already Set Up](#whats-already-set-up)
- [First-Time MCP Setup or Fresh Clones](#First-time-MCP-setup)
- [Verify MCP is Working](#verify-mcp-is-working)
- [Generating Tests](#generating-tests)
- [Execution Reports](#execution-reports)

---

# Requirements

- Latest version of Visual Studio Code  
- Node.js 18 or later  
- One or more of the following AI Assistants:
  - GitHub Copilot Chat  
  - [Roo Code](https://roocode.com/)
  - [Cline](https://cline.bot/)  

---

# What’s Already Set Up

The following has already been done in this repo:

A `.vscode/mcp.json` configuration file added to start the MCP server containing the below config:

```json
{
	"servers": {
		"playwright": {
			"command": "npx",
			"args": [
				"@playwright/mcp@latest"
			],
			"type": "stdio"
		}
	},
	"inputs": []
}
```


# First time MCP setup
If you’re cloning this repo for the first time or setting up MCP on a new machine:
1.	Follow installation instructions in README.md
2.	MCP server installation - Install as a dev dependency using command:
```bash
npm install --save-dev @playwright/mcp@latest
```
3. Verify installation is successful by checking package.json has a @playwright/mcp entry.
4. Start the MCP server from .vscode/mcp.json by clicking on Start.If Start option not showing in mcp.json or MCP Server not starting, restart VS Code or system.

# Verify MCP is working
1. Open the Command Palette in VS Code (Ctrl+Shift+P / Cmd+Shift+P)
2. Search for and run:
```bash
MCP: List servers
```
3. You should see playwright listed as “running”.


# Generating Tests
With Roo, GitHub Copilot, or any AI code assistant, you can generate Playwright tests by providing your own sample test scenario.
1. Open your AI assistant
2. Copy and paste the sample scenario below which instructs the assistant to use the prompt file to generate your test.
3. To generate a test, use the prompt located at: [`ui-automation/prompts/generate-test.prompt.md`](../modules/ui-automation/prompts/generate-test.prompt.md)
4. You can create your own prompts by following implementation patterns [`docs/ai-test-generation-guidelines.md`](./ai-test-generation-guidelines.md)

``` bash
Read `prompts/generate-test.prompt.md` and follow the instructions.

Below is the test scenario:

1. Navigate to https://www.automationexercise.com/
2. Go to products page
3. Search "Jeans" on products page
4. Verify that all the products listing after the serach are relevant products
```