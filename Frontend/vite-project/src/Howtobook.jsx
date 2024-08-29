
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
          This is a paragraph describing the image or providing additional
          information. You can add more details here, and it will be displayed
          below the "Roomyo1" text in a professional and readable manner.
          {"\n"}{"\n"}
          This extra information will be displayed on the next line, properly
          formatted within the paragraph.
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
            order: { xs: 1, md: 1 },
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
            Booking Information
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
          >
            This is additional information that complements the image on the right.
            It provides context and details about the subject matter. Adjust
            the text as needed to fit your content and layout requirements.
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
            order: { xs: 2, md: 2 },
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
            order: { xs: 1, md: 1 },
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
            order: { xs: 2, md: 2 },
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
            Booking Information
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
          >
            This is additional information that complements the image on the left.
            It provides context and details about the subject matter. Adjust
            the text as needed to fit your content and layout requirements.
          </Typography>
        </Box>
      </Box>

      {/* Fifth Box with Image on the Right and Text on the Left */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
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
            order: { xs: 2, md: 1 },
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
            Another Section Title
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
          >
            This section includes text that provides further details or context.
            It is aligned to the left of the image on larger devices, and stacked
            on top of the image on smaller devices.
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
            order: { xs: 1, md: 2 },
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
    </Box>
  );
}




