array = [... new Array(20).fill(0)];idx = 0;output = [];array[idx] = (array[idx]-[]) + 1;array[idx] = (array[idx]-[]) + 1;array[idx] = (array[idx]-[]) + 1;array[idx] = (array[idx]-[]) + 1;array[idx] = (array[idx]-[]) + 1;array[idx] = (array[idx]-[]) + 1;array[idx] = (array[idx]-[]) + 1;array[idx] = (array[idx]-[]) + 1;while(array[idx] != 0){console.log(array[idx] , idx);idx+=1;console.log(idx);array[idx] = (array[idx]-[]) + 1;array[idx] = (array[idx]-[]) + 1;array[idx] = (array[idx]-[]) + 1;array[idx] = (array[idx]-[]) + 1;array[idx] = (array[idx]-[]) + 1;idx-=1;array[idx] = (array[idx]-[]) - 1;};idx+=1;console.log(idx);output.join(array[idx]);console.log( (array[idx]-[]),array );
