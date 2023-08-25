Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3000/api/greetings' #modify the origin to be the URL of your API endpoint
    resource '*', headers: :any, methods: [:get, :post]
  end
end
