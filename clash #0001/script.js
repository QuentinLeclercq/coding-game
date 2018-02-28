w=readline().split` `
a=w[0]
b=w[1]
A=a.split``
B=b.split``
m=A.filter(e=>B.includes(e))[0]
i=a.indexOf(m)
p=print
f=()=>{p(L.split``.join` `.toUpperCase())}
v=()=>{p(' '.repeat(i*2)+S[j].toUpperCase())}
z=b.indexOf(m)
x=b.length
y=a.length
L=x>=y?b:a
S=x>=y?a:b
if(!m){p('NO COMMON CHARACTER')}
else{if(z==0){f()
for(j=1;j<S.length;j++)v() 
}else{for(j=0;j<z;j++)v() 
f()
for(j=z+1;j<x;j++)v()}}