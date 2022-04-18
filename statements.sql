--urls: table--
create table urls(
	id int AUTO_INCREMENT primary key not null,
	tiny nvarchar(20) unique not null,
	complete nvarchar(2083) not null,
	timeAdded timestamp default current_timestamp
);
--add index on tiny
create index tiny_index_hash on urls(tiny) using HASH;



--addurl: stored procedure--
delimiter $$
create procedure addurl(in tiny nvarchar(20), in complete nvarchar(2083))
begin
	insert into urls(tiny, complete) values (tiny, complete);
end
$$
delimiter ;



--geturl: stored function
delimiter $$
create function geturl(in_tiny nvarchar(20))
	returns nvarchar(2083)
begin
	return (select complete from urls where tiny=in_tiny);
end
$$
delimiter ;