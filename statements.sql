--urls: table--
create table urls(
	id int AUTO_INCREMENT primary key not null,
	tiny nvarchar(20) unique not null,
	complete nvarchar(2083) not null,
	timeAdded timestamp default current_timestamp
);



--addurl: stored procedure--
delimiter $$
create procedure addurl(in tiny nvarchar(20), in complete nvarchar(2083))
begin
  insert into urls(tiny, complete) values (in_tiny, in_complete);
end
$$
delimiter ;



--geturl: stored function
delimiter $$
create function geturl(tiny nvarchar(20))
  returns nvarchar(2083)
begin
  return (select complete from urls where tiny=@tiny);
end
$$
delimiter ;