/**
 * Класс VK
 * Управляет изображениями из VK. С помощью VK API.
 * С помощью этого класса будет выполняться загрузка изображений из vk.
 * Имеет свойства ACCESS_TOKEN и lastCallback
 * */
class VK {

  static ACCESS_TOKEN = '958eb5d439726565e9333aa30e50e0f937ee432e927f0dbd541c541887d919a7c56f95c04217915c32008';
  static lastCallback;

  /**
   * Получает изображения
   * */
  static get(id = '', callback){
    console.log('step 1')
    this.callback = callback;
    let script = document.createElement('script');
    script.src = `https://vk.com/dev/photos.get?owner_id=${id}&album_id=profile&access_token=${this.ACCESS_TOKEN}&v=5.131&callback=VK.processData`
    document.getElementsByTagName('body')[0].appendChild(script);
  }
  

  /**
   * Передаётся в запрос VK API для обработки ответа.
   * Является обработчиком ответа от сервера.
   */
  static processData(result){
    document.querySelector('body').lastElementChild.remove();
    if (result.ok) {
      console.log(result);
      } else {
      alert('Ошибка :' + result.status);
      return;
      };


  }
}
