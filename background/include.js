   // js/include.js

   let navbarLoaded = false;

   function includeHTML(elementId, url) {
       if (navbarLoaded) return; // Если уже загружено, пропускаем
       
       fetch(url)
           .then(response => {
               if (!response.ok) {
                   throw new Error(Не удалось загрузить ${url}: ${response.statusText});
               }
               return response.text();
           })
           .then(data => {
               document.getElementById(elementId).innerHTML = data;
               navbarLoaded = true;
           })
           .catch(error => {
               console.error('Ошибка при загрузке HTML:', error);
           });
   }

   document.addEventListener('DOMContentLoaded', () => {
       includeHTML('navbar-placeholder', 'https://viilture.github.io/vilture.github.io/background/background.html');
   });
   
