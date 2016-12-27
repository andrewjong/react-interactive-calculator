/**
 * Parse to array of phrases
 * @flow
 */

type ASTNode = {
  Root: {}
};

export default function AST(phrases: string): ASTNode {
  // Ex. split 'one plus two' into ['one', 'plus', 'two']
  const tokens = phrases.split(' ').filter(e => e !== '');

  // Categorize:
  //
  // Check if the phraseArray has invalid words
  // Does a phrase not exist in ReservedWords?
  // If a phrase cannot be categorized, throw error

  return {
    Root: {}
  };
}
