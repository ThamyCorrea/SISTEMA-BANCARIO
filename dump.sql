create database sistema_bancario

create table if not exists accounts(
  number_account serial primary key,
  balance integer not null,
  client text not null
  );
  
 create table if not exists clients(
   number_account_id integer not null references accounts (number_account),
   name text not null,
   cpf char(11) not null unique,
   birth_date date not null,
   phone text,
   email text not null unique,
   password text not null
   );
   
  create table if not exists deposits(
   number_account_id integer not null references accounts (number_account),
   amount integer not null,
   date date
   );  
   
   
   
   create table if not exists tranfers(
   	date date not null,
   	origin_account_number integer references accounts (number_account) not null,
   	destination_account_number integer references accounts (number_account) not null,
   	amount integer not null
   );
   
   create table if not exists twithdraws(
    date date not null,
    number_account_id integer references accounts (number_account) not null,
    amount integer not null
   );
   
   create table if not exists bank(
     number_account_bank integer references accounts (number_account) not null,
     name text not null, 
     agency integer not null,
     password text not null
     );
     
     
     
     
     
     
   
   
   
  
   

