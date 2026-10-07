CREATE TABLE public.project_enquiries (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 full_name text NOT NULL,
 phone text NOT NULL,
 email text NOT NULL,
 project_type text NOT NULL,
 project_location text NOT NULL,
 message text NOT NULL,
 created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.project_enquiries TO service_role;
ALTER TABLE public.project_enquiries ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.project_enquiries IS 'Private consultation requests; server-only validated submissions, no public reads.';