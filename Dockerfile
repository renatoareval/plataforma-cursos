FROM html:5

WORKDIR /assets

# COPY /assets /assets/html

COPY . .

CMD ["html","index.html"]


