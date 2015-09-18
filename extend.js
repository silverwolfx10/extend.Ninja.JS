/**
 * $extend
 *
 * Copia as propriedades enumeravies de b para a e retorna a, se b
 * tem uma propriedade de mesmo nome, a propriedade de a sera
 * sobreescrita. Esta modulo nao manipula metodos getter e setter nem copia
 * atributos a funcao curry
 *
 * @module $extend
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 *
 *        $extend({ a: '', b: '' }, { c: '' });
 *
 */
this.Ninja.module('$extend', ['$curry'], function ($curry) {

  /**
   * Copia as propriedades enumeravies de b para a e retorna a, se b
   * tem uma propriedade de mesmo nome, a propriedade de a sera
   * sobreescrita. Esta modulo nao manipula metodos getter e setter nem copia atributos
   *
   * @public
   * @method extend
   * @param {Object} a Primeiro objeto
   * @param {Object} b Segundo objeto
   * @return {Object} Primeiro objeto com as propriedades do segundo objeto
   * @example
   *
   *        $extend({ a: '', b: '' }, { c: '' });
   *
   */
  function extend(a, b) {
    for (key in b) a[key] = b[key];
    return a;
  }

  /**
   * Revelacao do modulo $extend, encapsulando a visibilidade das funcoes
   * privadas
   */
  return $curry(extend);

});
