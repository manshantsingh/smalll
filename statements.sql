--urls: table--
create table urls(
	id int identity(1,1) primary key not null,
	tiny nvarchar(20) constraint ux_tiny unique nonclustered not null,
	complete nvarchar(2083) not null,
	timeAdded datetime default(getdate())
);



--addurl: stored procedure--
create procedure addurl(@tiny nvarchar(20), @complete nvarchar(2083))
as
begin
	insert into urls(tiny, complete) values (@tiny, @complete);
end



--geturl: stored function
create function geturl(@tiny nvarchar(20))
	returns nvarchar(2083)
as
begin
	return (select complete from urls where tiny=@tiny)
end