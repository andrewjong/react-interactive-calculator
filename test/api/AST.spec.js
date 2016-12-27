import { expect } from 'chai';
import AST from '../../app/api/AST';


describe('AST', () => {
  it('should allow Expressions', () => {
    expect(AST('one plus two')).to.eql({
      Root: {
        type: 'Expression',
        left: {
          type: 'Literal',
          value: 'one'
        },
        operator: {
          type: 'Addition'
        },
        right: {
          type: 'Literal',
          value: 'two'
        }
      }
    });
  });

  it('should allow declarations', () => {
    expect(AST('let some = three')).to.eql({
      Root: {
        type: 'Declaration',
        id: 'some',
        value: {
          type: 'Expression',
          left: {
            type: 'Literal',
            value: 'one'
          },
          operator: {
            type: 'Addition'
          },
          right: {
            type: 'Literal',
            value: 'two'
          }
        }
      }
    });
  });

  it('should allow declarations with expressions', () => {
    expect(AST('let foo = one plus two')).to.eql({
      Root: [
        {
          type: 'Declaration',
          id: 'foo',
          value: {
            type: 'Expression',
            left: {
              type: 'Literal',
              value: 'one'
            },
            operator: {
              type: 'Addition'
            },
            right: {
              type: 'Literal',
              value: 'two'
            }
          }
        }
      ]
    });
  });

  it('should allow ', () => {

  });
});
