import Language from "../component/home/language";

const techs : Language[] = [
    
        {
            "id" : 1,
            "brand" : "Javascript",
            "description" : "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages",
            "release_date" : new Date('2005-01-03'),
            "logo": 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
        
        },
        {
            "id" : 2,
            "brand": "PHP",
            "description" : "PHP is a server side scripting language that is embedded in HTML. It is used to manage dynamic content, databases, session tracking, even build entire e-commerce sites",
            "release_date" : new Date('1995-03-13'),
            "logo" : "https://www.seekpng.com/png/full/360-3603571_php-logo-png-php-elephant-icon-png.png"
        },
        {
            "id" : 3,
            "brand": "Python",
            "description" : "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures",
            "release_date" : new Date('2001-05-17'),
            "logo": "https://logos-world.net/wp-content/uploads/2021/10/Python-Symbol.png"
        }
    
]

export default techs;