SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

DROP TABLE IF EXISTS public.sampletable CASCADE;

CREATE TABLE public.sampletable (
    id decimal UNIQUE PRIMARY KEY NOT NULL, -- CREATE INDEX on this
    name character varying NOT NULL,
    email character varying, 
    created_at timestamp without time zone DEFAULT now()
);

CREATE INDEX sampletable_idx_id ON public.sampletable (id);
