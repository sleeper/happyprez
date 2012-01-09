require 'bundler/setup'
require 'coffee-script'

namespace :js do
  desc "compile coffee-scripts"
  task :compile do
    File.open "#{File.dirname(__FILE__)}/static/js/slides.js", 'w+' do |js|
      Dir.foreach("#{File.dirname(__FILE__)}/static/coffee/") do |cf|
        if /\.coffee$/ =~ cf
          js.puts CoffeeScript.compile File.read "#{File.dirname(__FILE__)}/static/coffee/#{cf}"
        end
      end
    end
  end
end

namespace :less do
  desc "compile less"
  task :compile do
    File.open("#{File.dirname(__FILE__)}/static/css/slides.css", 'w+') do |css|
      Dir.foreach("#{File.dirname(__FILE__)}/static/less/") do |cf|
        if /\.less$/ =~ cf
          puts "Treating #{cf} ..."
          file = File.join(File.dirname(__FILE__),"static","less", cf)
          oc = `lessc #{file}`
          css.puts oc
        end
      end
    end
  end
end

