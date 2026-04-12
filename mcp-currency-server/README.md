# MCP Currency Converter

A fast, lightweight MCP server for real-time currency conversion. Supports 150+ currencies with exchange rates from the European Central Bank.

## Installation

### For Claude Desktop

Add this to your Claude Desktop configuration file:

**macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "currency-converter": {
      "command": "node",
      "args": ["/path/to/mcp-currency-server/index.js"]
    }
  }
}
```

Then restart Claude Desktop.

## Usage

Once installed, you can ask Claude:

- "Convert 500 USD to EUR"
- "What are the current exchange rates for GBP?"
- "How much is 10000 JPY in USD?"

## Tools

| Tool | Description |
|------|-------------|
| `convert_currency` | Convert between any two supported currencies |
| `list_rates` | List all exchange rates for a base currency |

## Supported Currencies

USD, EUR, GBP, JPY, CAD, AUD, CHF, CNY, INR, MXN, BRL, KRW, SGD, HKD, SEK, NOK, DKK, NZD, ZAR, AED

## License

MIT
