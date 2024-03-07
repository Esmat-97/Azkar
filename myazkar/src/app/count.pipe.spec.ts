import { CountPipe } from './count.pipe';

describe('CountPipe', () => {
  it('create an instance', () => {
    const pipe = new CountPipe();
    expect(pipe).toBeTruthy();
  });

 
  

  it('show if the value one',()=>{
    const pipe =new CountPipe();
    expect(pipe.transform(1)).toEqual('one time');
      });


      it('show if the value one',()=>{
        const pipe =new CountPipe();
        expect(pipe.transform(2)).toEqual('two times');
          });


          it('show if the value one',()=>{
            const pipe =new CountPipe();
            expect(pipe.transform(3)).toEqual('three times');
              });



});
