import '../styles/tokens-grid.css'

export interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
  hasSpaces?: boolean
  hasFontSizes?: boolean
  hasFontWeights?: boolean
  hasRadius?: boolean
}

export function TokensGrid({
  tokens,
  hasRemValue,
  hasSpaces,
  hasFontSizes,
  hasFontWeights,
  hasRadius,
}: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>value</th>
          {!!hasRemValue && <th>Pixels</th>}
          {!!hasSpaces && <th>Reference Style</th>}
          {!!hasFontSizes && <th>Exemple</th>}
          {!!hasRadius && <th>Radius Component</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>

              {!!hasRemValue && <td>{Number(value.replace('rem', '')) * 16}px</td>}
              {!!hasSpaces && (
                <td>
                  <div style={{ width: value }} className="token-reference-style" />
                </td>
              )}
              {!!hasFontSizes && <td style={{ fontSize: value }}>Lorem</td>}
              {!!hasFontWeights && <td style={{ fontWeight: value }}>Lorem</td>}
              {!!hasRadius && (
                <td>
                  <div style={{ borderRadius: value, width: '50px' }} className="token-reference-style" />
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
