class Content extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        
        <section class="conteudo">

        </section>
        `
        const makeARequest = function (options, done, fail, always) {
            $.ajax(options)
                .done(done)
                .fail(fail)
                .always(always);
            };

        var userLogin = {
        email:'f@f.com',
        password:'12345'
        }
        makeARequest({
                url: "https://osm.soplay.com.br/api/v1/auth/",
                type: 'POST',
                dataType: 'json',
                contentType: "application/json",
                data: JSON.stringify(userLogin),
                beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("nxplay_apps:123w23sdsdsd!!q323@"));
                }
        },
        function(validation) {
            console.log(validation);
            console.log("token", validation.token);
            localStorage.setItem("TKN", validation.token);

            validation.access ? '': alert("USUÁRIO INVÁLIDO !");
        });
        var tkn = localStorage.getItem("TKN");

        makeARequest({
            url: "https://osm.soplay.com.br/api/v1/users/me/",
            type: 'GET',
            dataType: "json",
            headers: {
                'Authorization': 'Bearer ' + tkn
            }
        },
        function(user) {
            console.log(user);
            localStorage.setItem('user', JSON.stringify({ user }));
        });

        var user = localStorage.getItem("user");

        makeARequest({
            url: 'https://d2bdy3auu60erf.cloudfront.net/api/v1/filmes/plano/' + user['plano'] + "/v2",
            type: 'GET',
            dataType: "json",
            headers: {
            'Authorization': 'Bearer ' + tkn
            }
        },
        function (dados) {
            if (dados != "") {
                var categorias = Object.keys(dados);
                var tamanho = Object.keys(dados).length;
                var entries = Object.entries(dados);
            }
           
            for(var c = 0 ;c< tamanho; c++){
                var lista = entries[c][1];
                $(".conteudo").append(`
                
                    <div class="glider categoria" id="${$.trim(categorias[c])}" style="color:white; font-size:20px;  margin-bottom: 20px;">
                        <p>${$.trim(categorias[c])}</p>
                    </div>
                `);
               
                console.log(lista);
                lista.forEach(item => {
                    if(item != undefined){
                        if(item.subcat == "Coleção NX"){
                        $("*[id^='Coleção']").append(`<img loading="lazy" src="${item.image}" alt="" class="thumb focusable"  onfocus="setBanner('${item.image}')">`);
                        }else
                            $(`#${categorias[c]}`).append(`<img loading="lazy" src="${item.image}" alt="" class="thumb focusable"  onfocus="setBanner('${item.image}')">`);
                    }
                });
            }
            const gliders = document.querySelectorAll(".glider");
            gliders.forEach((glide) => {
            new Glider(glide, {
                slidesToShow: 7,
                slidesToScroll: 1,
                scrollLock: true,
                scrollLockDelay:100,
              });
            });
              SpatialNavigation.init();
              SpatialNavigation.add({
                selector: 'a, .focusable'
              });
              SpatialNavigation.makeFocusable();
              SpatialNavigation.focus();
            
            // function setBanner(){
            //     console.log("clicou");
            //     areaBanner.style.backgroundimage = img;
            //     console.log("imagem",img);
            // }

        //  var player = videojs('video');
        //  player.play();
        // console.log("ITEM ", item);
        // item.forEach(filme => {
        //   $("categoria").append(`
        //     <img src="${filme.image}" alt="" class="thumb" style="height:100px;width:180px;">
        //   `);
        // });
        });
        // var areaBanner = document.querySelector('.sp--banner');
        //     var card = document.querySelector('.thumb');
        //     var img = card.getAttribute('src');
        //     console.log("imagem",img);
        //     card.addEventListener("mouseover", function(){
        //         console.log("clicou");
        //     });
    }
    disconnectedCallback() {
    }
}

  customElements.define('sp-content', Content);