/* Just copying this here for extra clarification:
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

let booleanFunc = () => Math.random() < Math.random()

let tabwidth = Math.ceil(Math.random() * (Date.now() % 32))
let quoteProps = ['as-needed', 'consistent', 'preserve'][Math.floor(Math.random() * 3)]
let trailingComma = ['none', 'all', 'es5'][Math.floor(Math.random() * 3)]
let arrowParens = ['always', 'avoid'][Math.floor(Math.random() * 2)]
let htmlWhitespaceSensitivity = ['css', 'strict', 'ignore'][Math.floor(Math.random() * 3)]
let endOfLine = ['lf', 'crlf', 'cr', 'auto'][Math.floor(Math.random() * 4)]

module.exports = {
  trailingComma,
  tabwidth,
  arrowParens,
  htmlWhitespaceSensitivity,
  endOfLine,
  quoteProps,
  semi: booleanFunc(),
  singleQuote: booleanFunc(),
  useTabs: booleanFunc(),
  jsxSingleQuote: booleanFunc(),
  bracketSpacing: booleanFunc(),
  requirePragma: booleanFunc(),
  insertPragma: booleanFunc(),
  vueIndentScriptAndStyle: booleanFunc(),
}
