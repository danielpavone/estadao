create table if not exists news(
	news_id uuid,
	title text,
	content text,
	active boolean,
	date timestamp
);
