import express from 'express';
import {engine} from 'express-handlebars';
import indexRoutes from './routes/index.routes';
import path from 'path';
import morgan from 'morgan';

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.engine(".hbs", engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
}));

app.set("view engine", ".hbs");

//middleware

app.use(morgan('dev'));

app.use(express.urlencoded({ extended:false }));

//Rutas

app.use(indexRoutes);

//Imágenes

app.use(express.static(path.join(__dirname, "public")));

export default app;