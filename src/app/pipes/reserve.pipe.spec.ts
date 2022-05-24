import { ReservePipe } from './reserve.pipe';

fdescribe('ReservePipe', () => {
  it('create an instance', () => {
    const pipe = new ReservePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform "roma" to "amor"', () => {
    const pipe = new ReservePipe();
    const rta = pipe.transform('roma');
    expect(rta).toEqual('amor');
  });

});
