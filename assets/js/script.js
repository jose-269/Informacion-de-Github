const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
    const nombre = document.getElementById("nombre");
    const nombreValue = nombre.value;

    const request = () => {
    const urlBase = "https://api.github.com/users/";
    let string = "";
    
    const usuario = async (user) => {
        let arr = [];
        try {
            const req = await fetch(urlBase + user);
            const reqJson = await req.json();
            const data = await reqJson;
            arr = data;
            
        } catch (error) {
            console.log(error);
        } finally {
            return arr;
        }
    };

    
    

    return{
        usuario
    } 
    
    };
    
    const getUser = () => {
        let dataUser = []
    
        const getData = async () => {
            const data = await request().usuario(nombreValue);
            console.log(data);
            try {
                const userAvatar = await data.avatar_url;
                const userLogin = await data.login;
                const userName = await data.name;
                const userRepos = await data.public_repos;
                const userLocation = await data.location;
                const userType = await data.type;
                dataUser = [userAvatar, userLogin, userName, userRepos, userLocation, userType];
                console.log(dataUser);
            } catch (error) {
                console.log(error);
            } finally {
                return dataUser;
            };
        }
        return {
            getData,
            dataUser,
        }
    };

    const getRepo = ()=> {
       let repoArr = []
        const repos = async (pag, cantPag) => {
            const dataRepo = await request().usuario(nombreValue);
            try {
                const newDatRepo = await dataRepo ;
                const nueva = 
                repoArr = newDatRepo;
                // repoArr.push(`/repos?page=${pag}&per_page=${cantPag}`)
                console.log(repoArr);
                
            } catch (error) {
                console.log(error);
            }
        }
        repos()
         
    }
    getRepo()

    
    const mostrarUser = async () => {
        const resultados = document.getElementById("resultados") 
        const dataMostrar = await getUser().getData();
        resultados.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-6 data">
                    <h4 class="userTitle">Datos de usuario</h4>
                    <img src="${dataMostrar[0]}" class="pic mb-5">
                    <p class="paragraph">Nombre de usuario: ${dataMostrar[1]}.</p>
                    <p class="paragraph">Nombre de login: ${dataMostrar[2]}.</p>
                    <p class="paragraph">Cantidad de repositorios: ${dataMostrar[3]}.</p>
                    <p class="paragraph">Localidad: ${dataMostrar[4]}.</p>
                    <p class="paragraph">Tipo de usuario: ${dataMostrar[5]}.</p>
                </div>
                <div class="col-6 repos">
                    <h4 class="repos">Nombre de repositorios</h4>
                </div>
            </div>
        </div>
        `
        // console.log(dataMostrar);
    };
    mostrarUser()







});



