import React from "react";
import { Box, Typography } from "@mui/material";

export default function Howtobook() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontSize: { xs: "2rem", md: "3rem" }, marginBottom: "20px" }}
      >
        How to Book
      </Typography>

      <Box
        component="img"
        src="https://i.postimg.cc/cCnPKtbc/Untitled-design-7.png"
        alt="How to Book"
        sx={{
          width: "120%",
          maxWidth: "1800px",
          maxHeight: "120vh",
          marginBottom: "20px",
        }}
      />

      {/* Image with Text Overlay */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1800px",
          height: "auto",
          marginBottom: "40px",
        }}
      >
        <Box
          component="img"
          src="https://i.postimg.cc/cCnPKtbc/Untitled-design-7.png"
          alt="Overlay Image"
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: "120vh",
            objectFit: "cover",
          }}
        />
        <Typography
          variant="h4"
          component="div"
          sx={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            textAlign: "left",
            fontSize: { xs: "1.25rem", md: "2rem" },
            boxSizing: "border-box",
            maxWidth: "calc(100% - 2rem)",
          }}
        >
          Roomyo1
        </Typography>

        <Typography
          variant="body1"
          component="p"
          sx={{
            position: "absolute",
            top: "50%",
            left: "1rem",
            transform: "translateY(-50%)",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            textAlign: "left",
            fontSize: { xs: "0.875rem", md: "1.25rem" },
            width: { xs: "calc(100% - 2rem)", md: "40%" },
            boxSizing: "border-box",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            marginTop: "2rem",
          }}
        >
          Hey Hustlers, we know the struggle to finding the perfect place whether you are a student or working professional 
          {"\n"}{"\n"}
          Thats why we have simplified it into just 5 step secure your spot hustle free wherever you are ready to get started
        </Typography>
      </Box>

      {/* Third Section with Text on the Left and Image on the Right */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "1800px",
          marginBottom: "40px",
          position: "relative",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            flex: 1,
            padding: "20px",
            textAlign: "left",
            order: 1,
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontSize: { xs: "1.25rem", md: "2rem" },
              marginBottom: "10px",
            }}
          >
            Shortlist  your option 
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
          >
            Browse through numerous accommodation avalible on our website . we will help you filter the best flat on your preference budget and location . Have any question about the properties or amenities ? we are here to help
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            position: "relative",
            width: { xs: "100%", md: "50%" },
            height: "auto",
            maxWidth: "600px",
            maxHeight: "300px",
            order: 2,
            marginTop: { xs: "20px", md: "0px" },
          }}
        >
          <Box
            component="img"
            src="https://i.postimg.cc/cCnPKtbc/Untitled-design-7.png"
            alt="Additional Information Image"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <Typography
            variant="h1"
            component="div"
            sx={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              fontSize: { xs: "5rem", md: "10rem" },
              color: "red",
              zIndex: 1,
              overflow: "visible",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              maxHeight: "100%",
              overflowY: "hidden",
            }}
          >
            1
          </Typography>
        </Box>
      </Box>

      {/* Fourth Section with Image on the Left and Text on the Right */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "1800px",
          marginBottom: "40px",
          position: "relative",
          flexWrap: "wrap",
          marginTop: { xs: "120px", md: "250px" }
        }}
      >
        <Box
          sx={{
            flex: 1,
            position: "relative",
            width: { xs: "100%", md: "50%" },
            height: "auto",
            maxWidth: "600px",
            maxHeight: "300px",
            order: 1,
          }}
        >
          <Box
            component="img"
            src="https://i.postimg.cc/cCnPKtbc/Untitled-design-7.png"
            alt="Additional Information Image"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <Typography
            variant="h1"
            component="div"
            sx={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              fontSize: { xs: "5rem", md: "10rem" },
              color: "red",
              zIndex: 1,
              overflow: "visible",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              maxHeight: "100%",
              overflowY: "hidden",
            }}
          >
            2
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            padding: "20px",
            textAlign: "left",
            order: 2,
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontSize: { xs: "1.25rem", md: "2rem" },
              marginBottom: "10px",
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
          >
            Fill out our contact form or reach out directly to connect with our team , After you submit one of our dedicated sales representative will get in touch within 24 hours to help you find your dream luxury accomodation
          </Typography>
        </Box>
      </Box>

      {/* Fifth Box with Image on the Right and Text on the Left */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row", // Keep the flexDirection as row for all screen sizes
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "1800px",
          marginBottom: "40px",
          position: "relative",
          marginTop: { xs: "120px", md: "250px" }
        }}
      >
        <Box
          sx={{
            flex: 1,
            padding: "20px",
            textAlign: "left",
            order: 1, // Ensure text remains on the left
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontSize: { xs: "1.25rem", md: "2rem" },
              marginBottom: "10px",
            }}
          >
            360 degree Tour/on-site visit
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
          >
            Feeling unsure about committing to a property ? we offere 360 degree virtual tour for a detailed online exploration and you can also visit the property in person to check out the amenties and layout we are here to help you make the best decision
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            position: "relative",
            width: "100%",
            maxWidth: "600px",
            maxHeight: "300px",
            marginTop: { xs: "20px", md: "0px" },
            order: 2, // Ensure image remains on the right
          }}
        >
          <Box
            component="img"
            src="https://i.postimg.cc/cCnPKtbc/Untitled-design-7.png"
            alt="Additional Information Image"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <Typography
            variant="h1"
            component="div"
            sx={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              fontSize: { xs: "5rem", md: "10rem" },
              color: "red",
              zIndex: 1,
              overflow: "visible",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              maxHeight: "100%",
              overflowY: "hidden",
            }}
          >
            3
          </Typography>
        </Box>
      </Box>




      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "1800px",
          marginBottom: "40px",
          position: "relative",
          flexWrap: "wrap",
          marginTop: { xs: "120px", md: "250px" }
        }}
      >
        <Box
          sx={{
            flex: 1,
            position: "relative",
            width: { xs: "100%", md: "50%" },
            height: "auto",
            maxWidth: "600px",
            maxHeight: "300px",
            order: 1,
          }}
        >
          <Box
            component="img"
            src="https://i.postimg.cc/cCnPKtbc/Untitled-design-7.png"
            alt="Additional Information Image"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <Typography
            variant="h1"
            component="div"
            sx={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              fontSize: { xs: "5rem", md: "10rem" },
              color: "red",
              zIndex: 1,
              overflow: "visible",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              maxHeight: "100%",
              overflowY: "hidden",
            }}
          >
            4
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            padding: "20px",
            textAlign: "left",
            order: 2,
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontSize: { xs: "1.25rem", md: "2rem" },
              marginBottom: "10px",
            }}
          >
            Pay once satisfied
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
          >
            once you've chosen your roomyo, pay a token to secure your booking and confirm your moves in date the token reserve your room/appartment and can be paid via credit card , Debit card, net banking or upi our sales representative will assist with the payment process and any question  
          </Typography>
        </Box>
      </Box>



      <Box
        sx={{
          display: "flex",
          flexDirection: "row", // Keep the flexDirection as row for all screen sizes
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "1800px",
          marginBottom: "40px",
          position: "relative",
          marginTop: { xs: "120px", md: "250px" }
        }}
      >
        <Box
          sx={{
            flex: 1,
            padding: "20px",
            textAlign: "left",
            order: 1, // Ensure text remains on the left
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontSize: { xs: "1.25rem", md: "2rem" },
              marginBottom: "10px",
            }}
          >
            Welcome to Roomyo
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
          >
            upon completion of payment and agreement you can move into the property and beig your stay . should any issue arise . we are readily avalible to assist and resolve them 
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            position: "relative",
            width: "100%",
            maxWidth: "600px",
            maxHeight: "300px",
            marginTop: { xs: "20px", md: "0px" },
            order: 2, // Ensure image remains on the right
          }}
        >
          <Box
            component="img"
            src="https://i.postimg.cc/cCnPKtbc/Untitled-design-7.png"
            alt="Additional Information Image"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <Typography
            variant="h1"
            component="div"
            sx={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              fontSize: { xs: "5rem", md: "10rem" },
              color: "red",
              zIndex: 1,
              overflow: "visible",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              maxHeight: "100%",
              overflowY: "hidden",
            }}
          >
            5
          </Typography>
        </Box>
      </Box>




    </Box>
  );
}











