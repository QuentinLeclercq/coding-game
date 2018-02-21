u=readline()
print(u.includes`/`?u:u.includes`.`?'http://'+u:'ftp://'+u)