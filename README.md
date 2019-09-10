Sitio Web del inversor para consultar precios de acciones en la bolsa de valores en los Estados Unidos.

El usuario podrá seleccionar entre una lista de 5 empresas que son de su interés para consultar los precios de las acciones:

Facebook (FB)

Apple (AAPL)

Microsoft (MSFT)

Google (GOOGL)

Amazon (AMZN)

Cada empresa tiene entre paréntesis el símbolo que la representa en el mercado de valores por ejemplo el símbolo de Facebook es "FB". 

El usuario puede seleccionar de una empresa a la vez para consultar el valor actual de la acción, luego la pagina web utilizará un servicio llamado Alpha Vantage para obtener los precios y poder presentarlos en la pagina web para el usuario.

Para darle mas riqueza en la información al usuario, la pagina web deberá comparar el precio del día con el precio anterior y ver si el precio a incrementado o disminuido, en qué proporción porcentual (por ejemplo disminuyó un 1.4% el precio) y en qué valor (por ejemplo disminuyó USD 2.38). 

 

Cabe aclarar que la comparación se hace siempre contra el valor de cierre (close) del día anterior. 

 

Finalmente la información de precios se deberá mostrar en color verde en el caso de que haya habido un incremento, y en rojo en el caso contrario.

 

La información que se espera visualizar, es el valor de apertura (open), valor mas alto (high), valor mas bajo (low) y valor de cierre (close)

 

* Alpha Vantage API:

  Documentacion:https://www.alphavantage.co/documentation/

A considerar: utilizamos solamente la llamada para obtener precios diarios (TIME_SERIES_DAILY)

Ejemplo de una API call para obtener información de valores de acción para Facebook: https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=FB&outputsize=compact&apikey=X86NOH6II01P7R24

  

- Diseño de interfaz de usuario es libre.

- Utilizar React + NodeJS para el desarrollo del ejercicio.

- Control de código fuente debe estar en git (github o bitbucket) y utilizar estrategia de branching para el desarrollo y release tag para la versión a presentar.


To run this project you must open a terminal for each folder (node and front-react) and for each one run 'npm install' command to install all dependencies. Once finished run 'npm start' in both terminals.


