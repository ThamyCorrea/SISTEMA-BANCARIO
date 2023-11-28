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

  alter table clients
  alter column birth_date drop not null;
   
   
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
     
  alter table accounts
  drop column client 
 
  alter table accounts 
    add column  client_name text NOT NULL,
    add column client_cpf char(11) NOT  NULL unique ,
    add column client_birth_date date,
    add column client_phone text,
    add column client_email text not null unique,
    add column client_password text NOT NULL
    
     
     
     
     
   
   
   
  
   

