Node.js, Express aur EJS – Bunyaadi Maloomat
Node.js Basics
Node.js kya hai: Node.js ek JavaScript runtime environment hai jo server-side code chalata hai. Iska
matlab ye hai ke aap JavaScript ko browser ke alawa apne server par bhi chala sakte ho. Ye V8
JavaScript engine (jo Chrome browser me hota hai) par based hai, jiski wajah se code tez chalta hai.
Node install kaise kare: Node.js ko official website se download karke install karo. Installation ke
baad terminal (command prompt) me node -v chalakar version check kar sakte ho. Agar version
number nazar aaye, to install ho chuka hai.
Node REPL: REPL ka matlab hai Read-Eval-Print Loop. Terminal me node type karne se REPL start ho
jaata hai. Isme aap JavaScript commands seedha likhkar turant result dekh sakte ho. Ye practice aur
chote code test karne ke liye kaam aata hai.
.js files run karna: Node.js me aap apni .js files bana ke unko run kar sakte ho. Example ke liye
ek hello.js file banao:
// hello.js
console.log("Salam Duniya!");
Fir terminal me jaake node hello.js command chalao. Is se console me Salam Duniya! print ho
jayega.
Process object: Node.js me process ek global object hota hai jo current process ki maloomat deta
hai. Jaise process.pid se aapko process ka ID milta hai, process.platform se OS type pata
chalta hai, aur process.argv se command line arguments mil sakte hain.
Modules aur exports: Agar aap code ko alag files me organize karna chahte ho, to
module.exports ka use karke apne functions ya variables ko dusri file me export kar sakte ho.
Phir jis file me use karna ho, wahan require('./filename') ya import se le sakte ho.
Example:
// greetings.js
module.exports = function(name) {
console.log("Salam " + name);
};
// app.js
const greet = require('./greetings');
greet("Ali"); // Salam Ali
1
Folder me exports (index.js): Agar ek folder me bohat si files hain, to aap ek index.js bana ke
usme saari files se exports combine kar sakte ho. Phir folder ka path require karne par index.js
apne aap chalta hai. Ye tarika libraries banane me kaam aata hai.
npm (Node Package Manager): npm ek tool hai jo Node.js packages install karne aur manage
karne ke liye use hota hai. Jaise agar aapko Express ya koi aur package chahiye, to npm install
express command se woh install ho jayega. npm dependencies ko track karta hai aur
package.json file me update rakhta hai.
package.json file: npm init (ya npm init -y ) command chalane se ek package.json file
banti hai. Isme project ka naam, version aur installed dependencies ki list hoti hai. Is file ke through
aap project ko dusre developers ke saath share kar sakte ho, taki unhe zaroori packages maloom ho
jayein.
Local vs Global Installation: Agar aap npm install packageName chalate ho to woh package
sirf current project ke liye install hota hai (local install). Agar npm install -g packageName use
karo to system-wide (global) install hota hai, jise aap kisi bhi project me bina dobara install kiye use
kar sakte ho.
Modules import karna: Apni files me modules use karne ke liye const kuch =
require('moduleName') ya ES6 style me import ... from '...' ka istemal hota hai. Ye
aapko alag-alag JavaScript files aur third-party libraries ko apni file me kaam me lane deta hai.
Express.js
Express kya hai: Express.js ek web framework hai jo Node.js ke upar bana hai. Ye web applications
aur APIs banana bahut aasaan kar deta hai. Express ki madad se aap server-side par HTTP requests
ko handle kar sakte ho aur clients ko pages ya data bhej sakte ho.
Express install karna: Apne project folder me jaake npm install express command chalayein.
Fir apne project me Express ko require karke use karo:
const express = require('express');
const app = express();
Simple server example: Ek basic Express server kuch is tarah banta hai:
const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send("Salam Duniya! Express server chal raha hai.");
});
app.listen(3000, () => {
console.log("Server port 3000 par chal raha hai...");
});
Is code me jab aap browser me http://localhost:3000 khologe, to Salam Duniya! Express
server chal raha hai. screen par nazar aayega.

2
Routing (GET/POST): Express me aap URLs ke liye routes define karte ho. app.get('/path',
(req, res) => {...}) GET requests ke liye aur app.post('/path', (req, res) =>
{...}) POST requests ke liye use hote hain. Har route ke callback function me aap req (request)
aur res (response) objects dekhte ho.
Response bhejna: Client ko response bhejne ke liye res.send() ya res.json() use karte hain.
res.send("Hello") simple string bhej deta hai, jabki res.json({name: "Ali"}) JSON
format me data bhejta hai.
Path parameters: Agar URL me dynamic hissa chahiye, to path parameters ka istemal karte hain.
Jaise:
app.get('/user/:id', (req, res) => {
res.send("User ka ID: " + req.params.id);
});
Yahan agar aap http://localhost:3000/user/123 open karenge, to response me User ka ID:
123 milega. req.params.id se :id ki value mil rahi hai.
Query strings: URL me ? ke baad query parameters bheje ja sakte hain. Example: http://
localhost:3000/search?name=Ali . Isko get karne ke liye Express me req.query use karte
hain:
app.get('/search', (req, res) => {
res.send("Search query: " + req.query.name);
});
Agar aap ?name=Ali bhejte hain, to req.query.name me Ali aayega.
Nodemon ka use: Har code change ke baad server ko baar-baar restart na karna pade, iske liye
nodemon tool use hota hai. npm install -g nodemon karke install karo. Phir nodemon
app.js command se server chalayenge to file save hone par auto-restart ho jayega.
Templating (EJS)
Templating kya hai: Templating ka matlab hai dynamic HTML pages banana jahan server se data le
kar HTML me inject kiya jaye. Is se static HTML ke bajaye har request par naya content generate hota
hai. EJS (Embedded JavaScript) is tarah ka templating engine hai jo Node.js me istemal hota hai.
EJS install aur setup: EJS use karne ke liye npm install ejs chalao. Phir apne Express app me
EJS ko view engine set karo:
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
Is se Express ko pata chal jayega ke aap EJS templates use kar rahe ho.
Views directory: By default, aapki EJS templates views naam ke folder me hone chahiye. Wahan
.ejs files banao, for example views/index.ejs .
3
Data pass karna aur interpolation: Jab aap route me res.render('index', { title: 'Mera
Page' }); chalate ho, to index.ejs me <%= title %> likh ke ye value show kar sakte ho.
Example:
app.get('/', (req, res) => {
res.render('index', { title: 'Mera Pehla Page' });
});
<!-- views/index.ejs -->
<h1><%= title %></h1>
Ye code browser par <h1>Mera Pehla Page</h1> dikha dega.
Conditional (If/Else): EJS me aap if/else logic laga sakte ho. Jaise:
<% if(user) { %>
<p>Welcome, <%= user.name %>!</p>
<% } else { %>
<p>Please log in.</p>
<% } %>
Is se agar user object mil raha hai to welcome message ayega, warna login prompt dikhaya
jayega.
Loops (forEach): Agar array data hai to loop karke items dikha sakte ho:
app.get('/fruits', (req, res) => {
res.render('fruits', { fruits: ['Seb', 'Kela', 'Aam'] });
});
<!-- views/fruits.ejs -->
<ul>
<% fruits.forEach(f => { %>
<li><%= f %></li>
<% }); %>
</ul>
Ye page par ek list (Seb, Kela, Aam) bana dega.
Static files serve karna: Images, CSS, JS waqera files ke liye public jaise folder me rakhkar serve
kar sakte ho:
app.use(express.static('public'));
Isse public folder ke andar images ya CSS files ko browser directly access kar sakta hai.

4
Includes (partials): Agar header, footer jaise common hisse har page me chahiye to unko alag files
bana ke include kar sakte ho:
<%- include('header') %>
<p>Page ka content yahan.</p>
<%- include('footer') %>
Is tarah code repeat nahi karna padta; sab pages me same header/footer use ho jayega.
JavaScript OOP (Object-Oriented Programming)
OOP basics: Object-Oriented Programming me hum data (properties) aur functions (methods) ko
objects ke form me organize karte hain. JavaScript me bhi objects aur classes use karke structured
code likha ja sakta hai.
Factory functions: Factory function ek aisi function hoti hai jo naya object banake return karti hai.
Example:
function createUser(name, age) {
return {
name: name,
age: age,
greet: function() {
console.log("Salam " + this.name);
}
};
}
const user1 = createUser("Aisha", 25);
user1.greet(); // Salam Aisha
Constructor functions aur new operator: Aap constructor function bana sakte ho aur new ke
saath use kar ke object create karte ho:
function Person(name, age) {
this.name = name;
this.age = age;
}
Person.prototype.greet = function() {
console.log("Hello, " + this.name);
};
const person1 = new Person("Rahul", 30);
person1.greet(); // Hello, Rahul
Yahan new Person() ek naya object banata hai jisme name aur age set hote hain.

5
Classes (ES6): Modern JavaScript me class syntax use kar sakte ho:
class Animal {
constructor(name) {
this.name = name;
}
speak() {
console.log(this.name + " awaaz nikal raha hai.");
}
}
const dog = new Animal("Kutta");
dog.speak(); // Kutta awaaz nikal raha hai.
Inheritance: Ek class doosri class ki properties/methods use kar sakti hai. extends keyword se
inheritance hoti hai:
class Student extends Animal {
study() {
console.log(this.name + " parh raha hai.");
}
}
const stud = new Student("Samina");
stud.speak(); // Samina awaaz nikal raha hai.
stud.study(); // Samina parh raha hai.
Yahan Student class ko Animal ki speak method mil rahi hai, aur usme apni study method
bhi hai. 
